import QRCode from 'easyqrcodejs'
import React from "react"
import QrForm from './QrForm'
import QrResult from './QrResult'

const Body = () => {
    const [url, setUrl] = React.useState('')
    const [size, setSize] = React.useState(300)
    const [loading, setLoading] = React.useState(false)
    const [qrcode, setQrCode] = React.useState()
    const [downloadable, setDownloadable] = React.useState(false)
    const qrCodeRef = React.useRef()

    const generateQr = () => {
        setDownloadable(false)
        if (qrcode) {
            qrcode.clear()
        }
        setLoading(true)

        const wh = parseInt(size)
        setTimeout(() => {
            setLoading(false)

            const options = {
                text: url,
                width: wh,
                height: wh,
                colorDark: "#000",
                colorLight: "#fff"
            }
            setQrCode(new QRCode(qrCodeRef.current, options))

            setTimeout(() => {
                setDownloadable(true)
            }, 50)
        }, 1000)
    }

    return (
        <main>
            <QrForm url={url} setUrl={setUrl} size={size} setSize={setSize} onSubmit={generateQr} />
            <QrResult loading={loading} downloadable={downloadable} qrCodeRef={qrCodeRef} />
        </main>
    )
}

export default Body