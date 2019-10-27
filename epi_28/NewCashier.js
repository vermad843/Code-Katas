function getOrder(input) {
 
  const menuItems = [
 'Burger',
 'Fries',
 'Chicken',
 'Pizza',
 'Sandwich',
 'Onionrings',
 'Milkshake',
 'Coke'   , 
   ];       
   
  // g :   // global match; find all matches rather than stopping after the first match
   
  const menuIndexes = menuItems.reduce((all, item, i) => {
    all[item] = i ;
    return all;
  }, {})
  console.log(menuIndexes);


   menuItems.forEach((menuItem) => {
     const regexp = new RegExp(menuItem.toLowerCase(), 'g');
     input = input.replace(regexp,` ${menuItem} `);         //lowercase letters to uppercase letters with spaces both side
   });

   const order = input.trim().split('  ').sort((a,b) => {     
      return menuIndexes[a] - menuIndexes[b];                 
      });

   return order.join(' ');  //join will make a proper space between them 
}


 
console.log(getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"),
 "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke");
console.log(getOrder("pizzachickenfriesburgercokemilkshakefriessandwich"),
 "Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke");