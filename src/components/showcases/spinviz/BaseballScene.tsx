"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import type { PitchSpinData } from "@/data/spinData";

interface BaseballSceneProps {
  pitch: PitchSpinData;
  viewMode: "default" | "pitcher" | "hitter";
}

function BaseballModel({ pitch }: BaseballSceneProps) {
  const ballRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const markerRef = useRef<THREE.Mesh>(null);

  const axisRotation = useMemo(() => {
    const spinAxis = THREE.MathUtils.degToRad(pitch.spinAxis);
    const gyro = THREE.MathUtils.degToRad(pitch.gyroAngle);
    return new THREE.Euler(gyro, 0, spinAxis, "XYZ");
  }, [pitch.spinAxis, pitch.gyroAngle]);

  const seamTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return null;
    }

    const width = canvas.width;
    const height = canvas.height;
    ctx.fillStyle = "#F8F8F6";
    ctx.fillRect(0, 0, width, height);

    const drawSeam = (offsetY: number, direction: number) => {
      ctx.strokeStyle = "#C0392B";
      ctx.lineWidth = 14;
      ctx.lineCap = "round";
      ctx.beginPath();
      for (let x = 0; x <= width; x += 8) {
        const y =
          offsetY +
          Math.sin((x / width) * Math.PI * 2 * direction) * height * 0.16;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      for (let x = 28; x <= width - 28; x += 42) {
        const y =
          offsetY +
          Math.sin((x / width) * Math.PI * 2 * direction) * height * 0.16;
        const angle =
          Math.cos((x / width) * Math.PI * 2 * direction) * direction * 0.6;
        const len = 10;
        ctx.strokeStyle = "#B33228";
        ctx.lineWidth = 3.2;
        ctx.beginPath();
        ctx.moveTo(
          x - Math.cos(angle + Math.PI / 2) * len,
          y - Math.sin(angle + Math.PI / 2) * len,
        );
        ctx.lineTo(
          x + Math.cos(angle + Math.PI / 2) * len,
          y + Math.sin(angle + Math.PI / 2) * len,
        );
        ctx.stroke();
      }
    };

    drawSeam(height * 0.3, 1);
    drawSeam(height * 0.7, -1);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 8;
    return texture;
  }, []);

  useFrame((_, delta) => {
    if (ballRef.current) {
      const spinSpeed = THREE.MathUtils.clamp(pitch.spinRate / 360, 2.2, 8.5);
      ballRef.current.rotation.y += delta * spinSpeed;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 1.5;
    }
    if (markerRef.current) {
      markerRef.current.rotation.z -= delta * 1.5;
    }
  });

  return (
    <group rotation={axisRotation}>
      <mesh ref={ballRef} castShadow receiveShadow>
        <sphereGeometry args={[1.35, 48, 48]} />
        <meshStandardMaterial
          map={seamTexture}
          color="#F5F5F5"
          roughness={0.42}
          metalness={0.03}
        />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 3.2, 18]} />
        <meshStandardMaterial
          color={pitch.color}
          emissive={pitch.color}
          emissiveIntensity={0.25}
        />
      </mesh>
      <mesh position={[0, 1.85, 0]}>
        <coneGeometry args={[0.11, 0.4, 20]} />
        <meshStandardMaterial
          color={pitch.color}
          emissive={pitch.color}
          emissiveIntensity={0.3}
        />
      </mesh>

      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.95, 0.04, 20, 180]} />
        <meshStandardMaterial
          color={pitch.color}
          emissive={pitch.color}
          emissiveIntensity={0.25}
        />
      </mesh>
      <mesh ref={markerRef} position={[1.95, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <coneGeometry args={[0.1, 0.28, 12]} />
        <meshStandardMaterial color={pitch.color} emissive={pitch.color} emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
}

export default function BaseballScene({ pitch, viewMode }: BaseballSceneProps) {
  const cameraPosition: [number, number, number] = [0, 0.2, 6.2];
  const modelRotation: [number, number, number] =
    viewMode === "default"
      ? [0.1, 0.55, 0]
      : viewMode === "hitter"
        ? [0, Math.PI, 0]
        : [0, 0, 0];
  const allowRotate = viewMode === "default";

  return (
    <div className="h-[380px] w-full overflow-hidden rounded-xl border border-white/10 bg-[#040615]">
      <Canvas key={viewMode} camera={{ position: cameraPosition, fov: 40 }} shadows>
        <color attach="background" args={["#040615"]} />
        <ambientLight intensity={0.45} />
        <directionalLight position={[4, 5, 4]} intensity={1.25} />
        <directionalLight position={[-3, -2, 3]} intensity={0.35} />
        <pointLight position={[-4, -2, 2]} intensity={0.65} color={pitch.color} />

        <group rotation={modelRotation}>
          <BaseballModel pitch={pitch} viewMode={viewMode} />
        </group>
        <OrbitControls
          enablePan={false}
          enableRotate={allowRotate}
          minDistance={4.2}
          maxDistance={8}
          autoRotate={allowRotate}
          autoRotateSpeed={0.35}
        />
      </Canvas>
    </div>
  );
}
