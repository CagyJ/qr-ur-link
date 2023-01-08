const DownloadButton = ({qrCodeRef}) => {
    const canvasElem = qrCodeRef.current.firstChild
    const saveUrl = canvasElem.toDataURL('image/png')

    return (
        <a 
            id='save-link'
            className='bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 rounded w-1/3 m-auto my-5'
            href={saveUrl}
            download='qrcode.png'
        >
            Save 🌟
        </a>
    )
}

export default DownloadButton