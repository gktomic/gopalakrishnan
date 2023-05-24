import Card from "../elements/Card";

export function Portfolio() {
    return <div>
        <h1 className="text-3xl font-medium uppercase text-white py-5 text-center">Portfolio</h1>
        <div className="grid grid-cols-3">
            <Card title="Employee Portal" description="Full stack employee portal application." src="https://cdn.dribbble.com/users/2720710/screenshots/17003654/media/5dc73e4e602c2fcd565edc232db612fe.png?compress=1&resize=400x300&vertical=top" />
        </div>
    </div>
}