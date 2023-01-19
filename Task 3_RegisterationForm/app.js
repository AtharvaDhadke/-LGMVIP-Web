
var ImageSrc = "image.svg";
var image = function (event) {
  ImageSrc = URL.createObjectURL(event.target.files[0]);
};

$("#reg").click(function(e){
  e.preventDefault();
    var x = $("#outputDiv").html();
    var y =`
    <div class="pt-4 rounded-t-lg">
    <img src="`+ImageSrc+`" alt="image"
      class="object-cover w-24 h-24 mx-auto rounded-full shadow-xl bg-secondaryBG" />
     

    <blockquote
      class="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl bg-secondaryBG">
      <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900 font-bold mb-2">Enrolled</span>
      <p class="text-lg font-bold text-secondaryTxt">`+$('#name').val()+ `</p>
      <p class="mt-1 text-xl font-medium text-secondaryTxt">`+
      $('#id').val()+`
      </p>
      <p class="mt-1 text-sm font-medium text-secondaryTxt">`+
      $('#email').val()+`
      </p>
      <p class="mt-1 text-xl font-bold text-secondaryTxt">`+
        choose()
    +`
      </p>
    </blockquote>
  </div>
  `;
  $("#outputDiv").html(y+x)
  $("form")[0].reset()
  $("#close").trigger("click");
  ImageSrc = "image.svg";
    
  });

function choose() {
    if ( $('#course').val()=='Choose a course' ){
       return $('#course').val() = "None"
      }
      else{
       return $('#course').val()
    }
}