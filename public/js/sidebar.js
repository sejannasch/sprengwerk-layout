function sidebars() {
    return {
        sidebarLeftOpen: true,
        sidebarRightOpen: true,
        showLeftSidebar() {
            this.sidebarLeftOpen = true;
            this.sidebarRightOpen = false;
        },
        showRightSidebar() {
            this.sidebarRightOpen = true;
            this.sidebarLeftOpen = false;
        },
        closeLeftSidebar() {
            this.sidebarLeftOpen = false;
        },
        closeRightSidebar() {
            this.sidebarRightOpen = false;
        }
    }
    
}