const navForAll = [
    { href: "/dashboard", name: "Dashboard" },
    { href: "/dashboard/messages", name: "Messages" },
    { href: "/dashboard/bookmarks", name: "Bookmarks" },
    { href: "/dashboard/profile", name: "Profile" },
    { href: "/dashboard/settings", name: "Settings" },
];

const ownerExtraNav = [
    { href: "/dashboard/pgs", name: "My PGs" },
    { href: "/dashboard/submit-pg", name: "Submit PG" },
];

export const NAV_ITEMS = {
    owner: [
        navForAll[0], // Dashboard
        ...ownerExtraNav,
        ...navForAll.slice(1), // Remaining common items,
    ],
    user: [
        ...navForAll
    ],
};