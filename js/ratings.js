let elements = document.querySelectorAll('.rating');
function collect_ratings() {
    let rating = 0;
    let ratings = {
        count: 0,
        sum: 0,
        average: 0
    }
    elements.forEach(element => {
        let rating = parseInt(element.id.replace('star', ''))
        ratings.count += parseInt(element.value)
    });
}
