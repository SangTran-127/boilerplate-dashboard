import { Link, Outlet } from "react-router-dom";

const routes = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "Syllabus",
        href: "/syllabus"
    },
    {
        title: "Training program",
        href: "/training"
    }
]

export default function Root() {
    return (
        <>
            <div id="sidebar">
                <div>
                    <form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </form>
                    <form method="post">
                        <button type="submit">New</button>
                    </form>
                </div>
                <nav>
                    <ul>
                        {
                            routes.map((route) => (
                                <li key={route.href}>
                                    <Link to={route.href}>
                                        {route.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}