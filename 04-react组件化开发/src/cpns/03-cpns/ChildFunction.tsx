interface IPropType {
    name: string
}

export default function ChildFunction(props: IPropType) {
    return (
        <div>
            <h3>this is ChildFunction</h3>
            <p>父组件传递的:{props.name}</p>
        </div>
    )
}
