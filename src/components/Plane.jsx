import React, { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { easing } from 'maath'

export function Plane(props) {
    const group = useRef()
    // Load model
    const { scene, animations = [] } = useGLTF('/models/stylized_ww1_plane.glb')
    const { actions } = useAnimations(animations, group)

    useEffect(() => {
        if (animations && animations.length > 0 && actions) {
            // Play the first animation found
            const firstAnim = animations[0]
            const action = actions[firstAnim.name]
            action?.reset().fadeIn(0.5).play()
        }
    }, [actions, animations])

    useFrame((state, delta) => {
        easing.dampE(group.current.rotation, [state.mouse.y / 10, -0.5 + state.mouse.x / 10, 0], 0.25, delta)
    })

    return (
        <group ref={group} {...props} dispose={null}>
            <primitive object={scene} />
        </group>
    )
}

useGLTF.preload('/models/stylized_ww1_plane.glb')
