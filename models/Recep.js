class Recep {
    constructor(
        id,
        categoryId,
        complexity,
        imageUrl,
        duration,
        ingredients,
        steps
    ) {
        this.id = id,
            this.categoryId = categoryId,
            this.complexity = complexity,
            this.imageUrl = imageUrl,
            this.duration = duration,
            this.ingredients = ingredients,
            this.steps = steps
    }
}

export default Recep