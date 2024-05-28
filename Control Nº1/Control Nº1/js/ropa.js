(document).readyState(function(){


    $.get('https://fakestoreapi.com/products',function(data){

        console.log(data);

        $.each(data, function(i, item){

            html = `
            <div class="row row-cols-1 row-cols-md-3 g-8">
                <div class="card" style="width: 18rem;">
                    <img src="${item.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            `;
            $('#listar-ropa').append(html);
            
        });
    });

})