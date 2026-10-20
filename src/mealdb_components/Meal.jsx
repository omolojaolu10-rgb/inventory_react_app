import { Card, Spinner } from "flowbite-react"

const Meal = ({error, loading, meals}) => {
    return (
        <section className="bg-cyan-50 px-4 py-10">
            <div className="mx-auto max-w-6xl">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">Ingredients</h2>

                {loading && (
                    <div className="flex items-center justify-center gap-3 py-8" role="status">
                        <Spinner aria-label="Loading ingredients" size="lg" />
                        <span className="text-gray-700">Loading ingredients...</span>
                    </div>
                )}

                {error && (
                    <p className="rounded-lg bg-red-50 p-4 text-red-800" role="alert">
                        Ingredients could not be loaded. Please try again later.
                    </p>
                )}

                {!loading && !error && meals.length === 0 && (
                    <p className="text-gray-700">No ingredients were found.</p>
                )}

                {!loading && !error && meals.length > 0 && (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {meals.map((ingredient) => (
                            <Card key={ingredient.idIngredient || ingredient.strIngredient} imgSrc="{me.strThumb}">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {ingredient.strIngredient}
                                </h3>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default Meal