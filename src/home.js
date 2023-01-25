export default function generateHome() {
    const element = document.createElement('div');
    element.classList.add('page');
    const innerPage = document.createElement('div');
    innerPage.id = 'innerPage';
    const homeImage = document.createElement('div');
    homeImage.id = 'homeImage';
    const homeHeader = document.createElement('h3');
    homeHeader.id = 'homeHeader';
    homeHeader.innerHTML = 'Welcome to BRICK BURGER JOINT!<br><br><em>Your Mouth will never forget the experience!</em>';
    const homeDetail = document.createElement('div');
    homeDetail.id = 'homeDetail';
    homeDetail.innerHTML = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. '
    innerPage.append(homeHeader, homeImage, homeDetail)
    element.appendChild(innerPage)
    return element;
} 