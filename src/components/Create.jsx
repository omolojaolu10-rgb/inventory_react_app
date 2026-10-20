import { useContext, useState } from "react"
import { ProductsContext } from "../contexts/ProductsContext"

const Create = () => {
    const { setProducts } = useContext(ProductsContext)
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState("")

    function handleSubmit(event) {
        event.preventDefault()

        const productName = name.trim()
        const productQuantity = Number(quantity)
        if (!productName || !Number.isInteger(productQuantity) || productQuantity < 1) {
            return
        }

        setProducts((products) => [
            ...products,
            { name: productName, quantity: productQuantity, id: Date.now() },
        ])
        setName("")
        setQuantity("")
    }

    return (
        <section className="mx-auto my-8 w-full max-w-3xl px-4">
            <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8">
                <div className="mb-6">
                    <p className="text-sm font-semibold uppercase tracking-wider text-violet-700">Inventory</p>
                    <h2 className="mt-1 text-2xl font-bold text-gray-900">Add a product</h2>
                    <p className="mt-2 text-sm text-gray-600">Enter a product and its available quantity.</p>
                </div>

                <form className="grid gap-4 sm:grid-cols-[1fr_10rem_auto] sm:items-end" onSubmit={handleSubmit}>
                    <div>
                        <label className="mb-1.5 block text-sm font-medium text-gray-700" htmlFor="product-name">
                            Product name
                        </label>
                        <input
                            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-gray-900 outline-none transition focus:border-violet-600 focus:ring-2 focus:ring-violet-200"
                            id="product-name"
                            type="text"
                            placeholder="e.g. Wireless mouse"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="mb-1.5 block text-sm font-medium text-gray-700" htmlFor="product-quantity">
                            Quantity
                        </label>
                        <input
                            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-gray-900 outline-none transition focus:border-violet-600 focus:ring-2 focus:ring-violet-200"
                            id="product-quantity"
                            type="number"
                            min="1"
                            step="1"
                            placeholder="0"
                            value={quantity}
                            onChange={(event) => setQuantity(event.target.value)}
                            required
                        />
                    </div>
                    <button
                        className="rounded-lg bg-violet-700 px-5 py-2.5 font-semibold text-white transition hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                        type="submit"
                    >
                        Add product
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Create
