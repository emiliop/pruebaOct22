
  var items = [];
  var rate;

  Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
  }

  items.push(new Item('+5 Dexterity Vest', 10, 20));
  items.push(new Item('Aged Brie', 2, 0));
  items.push(new Item('Elixir of the Mongoose', 5, 7));
  items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
  items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
  items.push(new Item('Conjured Mana Cake', 3, 6));
 

  regularItems(items)
  {
   if (items[intentary].name != 'Aged Brie' && items[intentary].name != 'Backstage passes to a TAFKAL80ETC concert')
    {
      return true;
    }
  }

 addQuality(items, rate)
      {
        items[intentary].quality = items[intentary].quality + rate;
      }

 addQualityForBackstagePasses(items)
      {
      if (items[intentary].sell_in < 11) 
                        {
                           addQuality(items, 2);
                        }
                      if (items[intentary].sell_in < 6) 
                        {
                           addQuality(items, 3);
                        }
      }

 lowQuality(items, rate)
      {
        items[intentary].quality = items[intentary].quality - rate;
      }

 lowSellInDays(items) 
      {
        items[intentary].sell_in = items[intentary].sell_in - 1;
      }

 lowQualityRegularProducts (items, rate)
      {
                if (items[intentary].quality > 0) 
                {
                  lowQuality(items, rate);
                }
      }

 lowQualityWithNoSellIn  (items)
  {
    if (items[intentary].sell_in < 0) 
                   {
                          if ( regularItems(items) == true) 
                          {
                             if(/'Conjured'/.test(items[intentary].name))
                                {
                                    lowQuality(items, 4)
                                }
                             else
                                {
                            
                                    lowQualityRegularProducts (items,2);
                                }            
                          } 
                            
                   }
  }
 lowQualityWithSellIn  (items)
  {
     if(/'Conjured'/.test(items[intentary].name))
                    {
                        lowQuality(items, 2)
                    }
                lowQualityRegularProducts (items,1); 
  }

  update_quality() 
  {  
   for (var intentary = 0; intentary < items.length; intentary++) 
      {
        if (items[intentary].quality < 50 && items[intentary].name != 'Sulfuras, Hand of Ragnaros')
          {
             lowQualityWithNoSellIn  (items)

             if ( regularItems(items) == true) 
              {
                  lowQualityWithSellIn  (items)                
              } 
          
            else 
      
              {
                 
                    if (items[intentary].name == 'Backstage passes to a TAFKAL80ETC concert') 
                    {
                      addQualityForBackstagePasses(items)
                    }
                    else
                    {
                        addQuality(items, 1);
                    }
              }
         }
          
         lowSellInDays(items);
         
    }
    
}
