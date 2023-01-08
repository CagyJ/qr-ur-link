import QRCode from 'easyqrcodejs'
import React from "react"
import QrForm from './QrForm'
import QrResult from './QrResult'

const Body = () => {
    const [state, setState] = React.useState({
        url: '',
        size: 300,
        loading: false,
        downloadable: false,
        qrcode: null,
    })
    const qrCodeRef = React.useRef()

    const {url, size, loading, downloadable, qrcode} = state

    const generateQr = () => {
        setState({...state, downloadable: false, loading: true})
        if (qrcode) {
            qrcode.clear()
        }

        const wh = parseInt(size)
        setTimeout(() => {
            
            const options = {
                text: url,
                width: wh,
                height: wh,
                colorDark: "#000",
                colorLight: "#fff"
            }
            setState({...state, loading: false, downloadable: true, qrcode: new QRCode(qrCodeRef.current, options)})
        }, 1000)
    }

    const setSize = size => setState({...state, size: size})
    const setUrl = url => setState({...state, url: url})

    return (
        <main>
            <QrForm url={url} setUrl={setUrl} size={size} setSize={setSize} onSubmit={generateQr} />
            <QrResult loading={loading} downloadable={downloadable} qrCodeRef={qrCodeRef} />
        </main>
    )
}

export default Body