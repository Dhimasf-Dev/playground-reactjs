
interface Props {
    handleShow: () => void;
}

const ShowButton = ({handleShow}: Props) => {

    return (
        <div 
            className=' absolute top-10 right-3 text-xs cursor-pointer'
            onClick={handleShow}
        >
            Show
        </div>
    )
}

export default ShowButton