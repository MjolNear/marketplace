import {MouseEventHandler} from "react";

export interface TabButtonProps {
    title: string
    onClick: MouseEventHandler
    isActive: boolean
}

export interface TabPanelProps {
    tabs: string[]
    activeTab: string
    setActiveTab: (tab: string) => void
}