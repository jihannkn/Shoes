export default function ProductUploadFilter({className}) {
    const option = [7, 30, 90]
    return (
        <select className={`${className}`}>
            {option.map((option, i) => {
                return <option key={i} value={option}>Last {option} day</option>
            })}
        </select>
    )
}