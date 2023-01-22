<script>
	import { OrbitControls, T, useFrame } from '@threlte/core';
	import { spring } from 'svelte/motion';
	import { degToRad } from 'three/src/math/MathUtils';
	export let meter;
	const scale = spring(1);
	useFrame(() => {
		let val = meter.getValue() + 15;
		$scale = val > 1 ? val : 1;
	});
</script>

<T.PerspectiveCamera makeDefault position={[10, 10, 10]} fov={24}>
	<OrbitControls
		maxPolarAngle={degToRad(90)}
		enableZoom={false}
		target={{ y: 0.5 }}
		autoRotate={true}
	/>
</T.PerspectiveCamera>

<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />

<!-- Cube -->
<T.Group scale={$scale}>
	<T.Mesh position.y={0.5} castShadow let:ref>
		<T.TorusKnotGeometry args={[1.3, 0.3, 256, 64, 3, 4]} />
		<T.MeshNormalMaterial />
	</T.Mesh>
</T.Group>
