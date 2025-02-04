
 const contain = document.querySelector('.burger')

 const contain0 = document.querySelector('#burger0')

 const contain1 = document.querySelector('#burger1')

 const contain2= document.querySelector('#burger2')

 const contain3 = document.querySelector('.hall1')

 const contain4 = document.querySelector('.hall2')


  contain.addEventListener('click',() =>{
    
     if (contain3.style.display === '') {
         contain3.style.display ='grid'
         contain1.style.opacity ='0'
        contain0.style.rotate = '220deg'
        contain0.style.translate = '-5px 17px'
        contain2.style.rotate = '140deg'
        contain2.style.translate = '0px  -10px'


     }
     else if(contain3.style.display ==='grid')
        {
        contain1.style.opacity ='1'
       contain0.style.rotate = '0deg'
       contain0.style.translate = '0px'
       contain2.style.rotate = '0deg'
       contain2.style.translate = '0px'  
        contain3.style.display =''

     }

  })

  const content14 = document.querySelector('#contentf11')
  const content15 = document.querySelector('#contentf12')
  const content16 = document.querySelector('#contentf13')
  const content4 = document.querySelector('.contenth11')
  const content5 = document.querySelector('.contenth12')
  const content6 = document.querySelector('.contenth13')
  const content7 = document.querySelector('#contentr11')
  const content8 = document.querySelector('#contentr12')
  const content9 = document.querySelector('#contentr13')
  
   
        content14.addEventListener('mouseenter',() =>{
        content14.style.background = '#ff8d00'
        content4.style.fill = 'white'
        content7.style.color = 'white'
        
        })
    
        content14.addEventListener('mouseleave',() =>{
        content14.style.background = ''
        content4.style.fill = ''
        content7.style.color = ''
        
        })
    
        content15.addEventListener('mouseenter',() =>{
        content15.style.background = '#ff8d00'
        content5.style.fill = 'white'
        content8.style.color = 'white'
        
        })
        content15.addEventListener('mouseleave',() =>{
        content15.style.background = ''
        content5.style.fill = ''
        content8.style.color = ''
        
        })
        content16.addEventListener('mouseenter',() =>{
        content16.style.background = '#ff8d00'
        content6.style.fill = 'white'
        content9.style.color = 'white'
        
        })
        content16.addEventListener('mouseleave',() =>{
        content16.style.background = ''
        content6.style.fill = ''
        content9.style.color = ''
        
        })

        const contain200 = document.querySelector('#container1a1')
        const contain202 = document.querySelector('#container1b1')
        const contain201 = document.querySelector('#container1c1')
        const contain20a = document.querySelector('.content3050')
        const contain20b = document.querySelector('.content3060')
        const contain20c = document.querySelector('.content3070')
        const contain20j = document.querySelector('.content4050')
        const contain20k = document.querySelector('.content4051')
        const contain20g = document.querySelector('.content4052')
        const contain30 = document.querySelector('.content4000')
        const contain30l = document.querySelector('.content4001')
        const contain40l = document.querySelector('.content4002')
    
        contain200.addEventListener('mouseenter',() =>{
            contain200.style.background = '#ff8d00'
            contain20a.style.fill = 'white'
            contain20j.style.color = 'white'
            contain30.style.color = 'white'
        })
        contain200.addEventListener('mouseleave',() =>{
            contain200.style.background = ''
            contain20a.style.fill = ''
            contain20j.style.color = ''
            contain30.style.color = ''
        })
        contain202.addEventListener('mouseenter',() =>{
            contain202.style.background = '#ff8d00'
            contain20b.style.color = 'white'
            contain20k.style.color = 'white'
            contain30l.style.color = 'white'
        })
        contain202.addEventListener('mouseleave',() =>{
            contain202.style.background = ''
            contain20b.style.color = ''
            contain20k.style.color = ''
            contain30l.style.color = ''
        })
        contain200.addEventListener('mouseenter',() =>{
            contain200.style.background = '#ff8d00'
            contain20a.style.color = 'white'
            contain20j.style.color = 'white'
            contain30.style.color = 'white'
        })
        contain200.addEventListener('mouseleave',() =>{
            contain200.style.background = ''
            contain20a.style.color = ''
            contain20j.style.color = ''
            contain30.style.color = ''
        })
   
        
        contain201.addEventListener('mouseenter',() =>{
            contain201.style.background = '#ff8d00'
            contain20c.style.color = 'white'
            contain20g.style.color = 'white'
            contain40l.style.color = 'white'
        })
        contain201.addEventListener('mouseleave',() =>{
            contain201.style.background = ''
            contain20c.style.color = ''
            contain20g.style.color = ''
            contain40l.style.color = ''
        })
   
        

    
    
    