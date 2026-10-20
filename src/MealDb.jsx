import Nav from "./mealdb_components/Nav"
import Hero from "./mealdb_components/Hero"
import Meal from "./mealdb_components/Meal"
import { useEffect, useState } from "react"


const MealDb = () => {
    //a state to track error,loading,store what we fetched
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [meals,setMeals] = useState([])

    useEffect(() => {
        const controller = new AbortController()

        async function fetchMeals() {
            try {
                const response = await fetch(
                    "https://www.themealdb.com/api/json/v1/1/list.php?i=list",
                    { signal: controller.signal },
                )
                if (!response.ok) {
                    throw new Error(`MealDB request failed: ${response.status}`)
                }

                const data = await response.json()
                if (!Array.isArray(data.meals)) {
                    throw new Error("MealDB returned an invalid ingredient list")
                }

                setMeals(data.meals)
                setError(false)
            } catch (fetchError) {
                if (fetchError.name !== "AbortError") {
                    console.error("Unable to load MealDB ingredients:", fetchError)
                    setMeals([])
                    setError(true)
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false)
                }
            }
        }

        fetchMeals()
        return () => controller.abort()
    },[])

    return (
        <div className="py-10 bg-cyan-500 text-center">
            <h1 className="text-3xl font-bold">Welcome to MealDB</h1>
            <Nav />
            <Hero />
            <Meal error={error} loading={loading} meals={meals} />
        </div>
    )
}

export default MealDb