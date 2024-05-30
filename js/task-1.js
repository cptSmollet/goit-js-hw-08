  
  const categoriesList = document.getElementById('categories');

 
  const categoryItems = categoriesList.querySelectorAll('.item');

  
  console.log(`Number of categories: ${categoryItems.length}`);


  categoryItems.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const itemCount = item.querySelectorAll('li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemCount}`);
  });