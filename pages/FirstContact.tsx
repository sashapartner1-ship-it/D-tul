import React, { useState, useEffect } from "react"
import { AnimationState } from "../types"
import Experience from "../components/Experience"
import Overlay from "../components/Overlay"

export default function FirstContact() {
    const [phase, setPhase] = useState<AnimationState>(AnimationState.LOOPING)

    useEffect(() => {
        const timers = [
            setTimeout(() => setPhase(AnimationState.SHATTERING), 1500),
            setTimeout(() => setPhase(AnimationState.ACCELERATING), 2000),
            setTimeout(() => setPhase(AnimationState.REVEALED), 3500),
        ]

        return () => timers.forEach(clearTimeout)
    }, [])

    return (
        <div className="relative w-screen h-screen bg-slate-950 overflow-hidden">
            {/* 3D Background */}
            <Experience phase={phase} />

            {/* UI Overlay */}
            <Overlay phase={phase} />

            {/* Vignette */}
            <div className="pointer-events-none absolute inset-0 z-50 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)]" />
        </div>
    )
}
