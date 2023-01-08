import GetQr from "../imgs/get_qr.png"

const QrForm = ({url, setUrl, size, setSize, onSubmit}) => {
    
    const handleSubmit = e => {
        e.preventDefault()
        onSubmit()
    }

    return (
        <div className="flex flex-col-reverse align-center justify-center p-10 m-auto 
                    md:max-w-4xl md:flex-row">
            <div className="w-full md:w-2/3 mr-24 mt-10">
                <h1 className="text-3xl font-bold mb-5 md:text-4xl">
                    QR Your Link
                </h1>
                <p className="mb-4">
                    QR allows other people to access your website simple and quickly!
                </p>
            <p>
                Enter your URL below to generate a QR code and download it.
            </p>
            <form id="generate-form" className="mt-4" onSubmit={handleSubmit}>
                <input 
                    id="url" 
                    type="url" 
                    placeholder="Enter your link!"
                    className="w-full border-2 border-gray-200 rounded p-3 text-gray-dark mr-2 focus:outlin-non mb-5"
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                />
                <select 
                    id="size"
                    className="w-full border-2 border-gray-200 rounded p-3 text-gray-dark mr-2 focus:outlin-non"
                    value={size}
                    onChange={e => setSize(e.target.value)}
                >
                    <option value="100">100x100</option>
                    <option value="200">200x200</option>
                    <option value="300">300x300</option>
                    <option value="400">400x400</option>
                    <option value="500">500x500</option>
                    <option value="600">600x600</option>
                </select>
                <button 
                    className="bg-gray-800 rounded w-full text-white py-3 px-4 mt-5 hover:bg-black" 
                    type="submit"
                    disabled={!url.length}
                >
                    QR it! 🍯
                </button>
            </form>
            </div>
            <div className="w-full md:w-1/3 self-center">
                <img src={GetQr} alt="get qr" className="w-1/2 m-auto md:w-full" />
            </div>
        </div>
    )
}

export default QrForm