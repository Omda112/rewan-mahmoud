"use client";

import { Environment, Lightformer } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Shape } from "three";

function ribbonShape(outer: number, inner: number, start: number, end: number) {
  const shape = new Shape();
  shape.absarc(0, 0, outer, start, end, false);
  shape.lineTo(Math.cos(end) * inner, Math.sin(end) * inner);
  shape.absarc(0, 0, inner, end, start, true);
  shape.closePath();
  return shape;
}

const primaryRibbon = ribbonShape(1.42, 0.94, -2.55, 1.12);
const secondaryRibbon = ribbonShape(1.16, 0.83, -0.2, 2.55);

function ChromeRibbon({ shape, rotation, position }: { shape: Shape; rotation: [number, number, number]; position: [number, number, number] }) {
  return <mesh rotation={rotation} position={position}><extrudeGeometry args={[shape, { depth: 0.14, bevelEnabled: true, bevelSegments: 3, bevelSize: 0.035, bevelThickness: 0.04, curveSegments: 48 }]} /><meshStandardMaterial color="#d5d8db" metalness={1} roughness={0.19} envMapIntensity={1.55} /></mesh>;
}

function Sculpture() {
  return <group position={[0.18, -0.06, 0]} rotation={[0.08, -0.3, 0.12]} scale={1.06}>
    <mesh position={[-0.06, 0.05, 0.02]} scale={[0.8, 0.96, 0.72]} rotation={[0.2, -0.28, 0.08]}><sphereGeometry args={[0.9, 48, 48]} /><meshPhysicalMaterial color="#dce8f5" metalness={0.02} roughness={0.04} transmission={0.9} thickness={0.45} ior={1.28} transparent opacity={0.7} envMapIntensity={1.05} /></mesh>
    <ChromeRibbon shape={primaryRibbon} rotation={[0.88, 0.26, 0.14]} position={[0.06, -0.02, 0.24]} />
    <ChromeRibbon shape={secondaryRibbon} rotation={[-0.42, 0.66, -0.72]} position={[-0.16, 0.08, -0.16]} />
  </group>;
}

export function HeroScene() {
  return <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10"><Canvas style={{ pointerEvents: "none" }} dpr={[1, 1.5]} frameloop="demand" camera={{ position: [0, 0, 4.8], fov: 38 }} gl={{ alpha: true, antialias: true }} onCreated={({ invalidate }) => invalidate()}><ambientLight intensity={0.1} /><directionalLight position={[3, 4, 4]} intensity={3.1} color="#ffffff" /><directionalLight position={[-2, 1, 3]} intensity={0.62} color="#315cff" /><Environment resolution={64}><Lightformer form="rect" intensity={5} color="#ffffff" position={[0, 3, 2]} scale={[5, 3, 1]} /><Lightformer form="rect" intensity={1.15} color="#315cff" position={[-3, 1, 2]} scale={[2, 2, 1]} /><Lightformer form="rect" intensity={2.2} color="#15171b" position={[2, -1, 2]} scale={[5, 2, 1]} /></Environment><Sculpture /></Canvas></div>;
}
