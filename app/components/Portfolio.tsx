import Card from "../elements/Card";

export function Portfolio() {
    return <div>
        <h1 className="mt-10 text-3xl font-medium uppercase text-white py-5 text-center underline underline-offset-[16px] decoration-4 decoration-dotted decoration-sky-500">Portfolio</h1>
        <div className="mt-5 flex flex-row justify-center items-center flex-wrap gap-6">
            <Card title="Employee Portal" description="Full stack employee portal application tested with multi line description." src="https://cdn.dribbble.com/users/2720710/screenshots/17003654/media/5dc73e4e602c2fcd565edc232db612fe.png?compress=1&resize=400x300&vertical=top" />
            <Card title="Employee Portal" description="Full stack employee portal application tested with multi line description." src="https://cdn.dribbble.com/users/2720710/screenshots/17003654/media/5dc73e4e602c2fcd565edc232db612fe.png?compress=1&resize=400x300&vertical=top" />
            <Card title="Employee Portal" description="Full stack employee portal application tested with multi line description." src="https://cdn.dribbble.com/users/2720710/screenshots/17003654/media/5dc73e4e602c2fcd565edc232db612fe.png?compress=1&resize=400x300&vertical=top" />
            <Card title="Employee Portal" description="Full stack employee portal application." src="https://cdn.dribbble.com/users/2720710/screenshots/17003654/media/5dc73e4e602c2fcd565edc232db612fe.png?compress=1&resize=400x300&vertical=top" />
            <Card title="Employee Portal" description="Full stack employee portal application." src="https://cdn.dribbble.com/users/2720710/screenshots/17003654/media/5dc73e4e602c2fcd565edc232db612fe.png?compress=1&resize=400x300&vertical=top" />
            <Card title="Employee Portal" description="Full stack employee portal application." src="https://cdn.dribbble.com/users/2720710/screenshots/17003654/media/5dc73e4e602c2fcd565edc232db612fe.png?compress=1&resize=400x300&vertical=top" />
            <Card title="Employee Portal" description="Full stack employee portal application." src="https://cdn.dribbble.com/users/2720710/screenshots/17003654/media/5dc73e4e602c2fcd565edc232db612fe.png?compress=1&resize=400x300&vertical=top" />
        </div>
    </div >
}