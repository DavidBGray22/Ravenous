const apiKey='J5q-hsZUU0Tlchp0KqocX3zhb4Wr3oAwztNX84S6wWGRbhaVlDKhndGIejI2XS-l56x0HUc5oNiUBv4Yu6ogYorzTeJfFuBn9mDVpYqf0e2vS3RC8MunYi0E6yz5Y3Yx';
const Yelp = {
    search(term,location,sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    {headers:{Authorization:`Bearer ${apiKey}`
                }
            }).then(response => {
            return response.json();
        }).then(jsonResponse =>{
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                    
                }));
            }
        });
    }
};
export default Yelp;