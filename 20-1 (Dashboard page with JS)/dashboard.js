const container=document.getElementsByClassName("container")[0];
console.log(container);

let get_data = async() => {
     let url = "data.json";
     let response = await fetch (url);
     const data = await response.json();
     

     const datafrag=document.createDocumentFragment();


     for(const val of data)
     {
          const card=document.createElement("div");
          card.setAttribute("class","card");

          if(val.expired)
          {
               const expired=document.createElement("div");
               expired.setAttribute("class","expired");
               expired.innerText="EXPIRED";
               card.appendChild(expired);
          }
          
          const item=document.createElement("div");
          item.setAttribute("class","item");

          const item_1=document.createElement("div");
          let image=document.createElement("img");
          image.setAttribute("src",val.image);
          item_1.appendChild(image);


          const item_2=document.createElement("div");
          item_2.setAttribute("class","item-text");

          let p=document.createElement("p");
          p.setAttribute("id","input-text");
          p.innerText=val.title;

          item_2.appendChild(p);

          p=document.createElement("p");
          p.innerHTML=`${val.subject.name} <span class="grade_point">${val.subject.point}</span></p>`;

          item_2.appendChild(p);

          let ul=document.createElement("ul");

          for(let index of val.subject.index)
          {
               let li=document.createElement("li");
               let span=document.createElement("span");
               span.innerText=index[0];
               li.appendChild(span);

               let text=document.createTextNode(" "+index[1]+" ");
               li.appendChild(text);

               ul.appendChild(li);
          }

          item_2.appendChild(ul);
          
          let class_type=document.createElement("div");
          class_type.setAttribute("class","class-type");
          
          let select=document.createElement("select");
          select.setAttribute("name","class");
          console.log(val.class);

          if(val.class_avail == false)
          select.setAttribute("id","class_item_no");
          else
          select.setAttribute("id","class_item");

          for(let opt of val.class)
          {
               let option=document.createElement("option");
               option.setAttribute("value",opt);
               option.innerText=opt;
               select.appendChild(option);
          }
          

          class_type.appendChild(select);


          item_2.appendChild(class_type);

          if(val.student)
          {
               p=document.createElement("p");
               p.innerHTML=`${val.student} Students`;
               if(val.date)
               p.innerHTML=`${val.student} Students | ${val.date}`;
               item_2.appendChild(p);
          }



          const item_3=document.createElement("div");
          item_3.setAttribute("class","item-fav");
          image=document.createElement("img");
          image.setAttribute("src","icons/favourite.svg");
          if(val.fav === false)
          image.setAttribute("id","unfav");

          item_3.appendChild(image);
          
          item.appendChild(item_1);
          item.appendChild(item_2);
          item.appendChild(item_3);
          
          
          card.appendChild(item);
          card.appendChild(document.createElement("hr"));
          
          const item_report=document.createElement("div");
          item_report.setAttribute("class","item-report");
          image=document.createElement("img");
          image.setAttribute("src","img/preview.svg");
          item_report.appendChild(image);

          image=document.createElement("img");
          image.setAttribute("src","img/manage course.svg");
          if(val.opacity_less)
          image.setAttribute("id","opacity_less");
          item_report.appendChild(image);
          
          image=document.createElement("img");
          image.setAttribute("src","img/grade submissions.svg");
          if(val.opacity_less)
          image.setAttribute("id","opacity_less");
          item_report.appendChild(image);

          image=document.createElement("img");
          image.setAttribute("src","img/reports.svg");
          item_report.appendChild(image);
          

          card.appendChild(item_report);

          datafrag.appendChild(card);
          
     }    

     container.appendChild(datafrag);
   }

get_data();
