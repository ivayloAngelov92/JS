class ArtGallery {
    constructor(creator) {
        this.creator = creator
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 }
        this.listOfArticles = []
        this.guests = []
    }
    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase()
        if (!this.possibleArticles.hasOwnProperty(articleModel)) { throw Error("This article model is not included in this gallery!") }
        let currentA = this.listOfArticles.find((a) => a.articleName == articleName)
        if (currentA && currentA.articleModel == articleModel) {
            currentA.quantity += quantity
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
        }
        this.listOfArticles.push({ articleModel, articleName, quantity })
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }
    inviteGuest(guestName, personality) {
        let guest = this.guests.find((g) => g.guestName === guestName)
        if (guest) { throw Error(`${guestName} has already been invited.`) }
        let points = 0
        if (personality === 'Vip') { points = 500 }
        else if (personality === 'Middle') { points = 250 }
        else { points = 50 }

        this.guests.push({ guestName, points, purchaseArticle: 0 })
        return `You have successfully invited ${guestName}!`
    }
    buyArticle(articleModel, articleName, guestName) {
        articleModel = articleModel.toLowerCase()
        let currentA = this.listOfArticles.find((a) => a.articleName == articleName)
        if (!currentA || currentA.articleModel !== articleModel) { throw Error("This article is not found.") }
        if (currentA.quantity == 0) { return `The ${articleName} is not available.` }
        let guest = this.guests.find((g) => g.guestName === guestName)
        if (!guest) { return "This guest is not invited." }
        if (guest.points < this.possibleArticles[articleModel]) {
            return `You need to more points to purchase the article.`
        }
        guest.points -= this.possibleArticles[articleModel]
        currentA.quantity--
        guest.purchaseArticle++
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
    }
    showGalleryInfo(criteria) {
        if (criteria === 'article') {
            let result = ["Articles information:"]
            this.listOfArticles.forEach((a) => result.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`))
            return result.join('\n')
        } else if (criteria === 'guest') {
            let result = ["Guests information:"]
            this.guests.forEach((g) => result.push(`${g.guestName} - ${g.purchaseArticle}`))
            return result.join('\n')
        }
    }

}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));




