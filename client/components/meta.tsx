interface MetaProps {
    title?: string;
}

const Meta = ({title} : MetaProps) => {
    return (
        <head>
            <title>{title ? title : "DataBasesSatellite"}</title>
        </head>
    )
}

export default Meta;