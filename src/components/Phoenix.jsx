import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Phoenix(props) {
    const group = useRef()
    const { scene, animations = [] } = useGLTF('/models/phoenix_bird.glb')
    const { actions } = useAnimations(animations, group)

    useEffect(() => {
        if (animations && animations.length > 0 && actions) {
            // Play the first animation found
            const firstAnim = animations[0]
            const action = actions[firstAnim.name]
            action?.reset().fadeIn(0.5).play()
        }
    }, [actions, animations])

    return (
        <group ref={group} {...props} dispose={null}>
            <primitive object={scene} />
        </group>
    )
}

useGLTF.preload('/models/phoenix_bird.glb')
