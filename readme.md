#Books Testing API
######hope you won't hate project structure :)

##Documentation
Base URL – https://cvam67lwek.execute-api.us-east-1.amazonaws.com/dev

**Get Books**\
[GET] /books
```
Response Example:
[
    {
        "uuid": "da8ce030-6315-11ea-8f5f-ef5ee0a264e3",
        "authorName": "Testing 10",
        "name": "Hi Miccccc",
        "releaseDate": 1546300800
    }
]
```
\
**Get Book**\
[GET] /book/:bookUuid
```
Path Parameters:
bookUuid – uuid of a book
```
```
Response Example:
{
    "uuid": "da8ce030-6315-11ea-8f5f-ef5ee0a264e3",
    "authorName": "Testing 10",
    "releaseDate": 1546300800,
    "name": "Hi Miccccc"
}
```
\
**Create Book**\
[POST] /book/add
```
Request Body Example:
{
	"name": "Book New",
	"releaseDate": 1546300800,
	"authorName": "Author"
}
```
```
Response Example:
{
    "name": "Book New",
    "releaseDate": 1546300800,
    "authorName": "Author",
    "uuid": "da8ce030-6315-11ea-8f5f-ef5ee0a264e3"
}
```
\
**Update Book**\
[POST] /book/:bookUuid/update
```$xslt
Path Parameters:
bookUuid - uuid of a book
```
```$xslt
Request Body Example:
{
    "authorName": "Testing 10",
    "name": "Hi Miccccc",
    "releaseDate": 1546300800
}
```
```$xslt
Response Example:
{
    "uuid": "da8ce030-6315-11ea-8f5f-ef5ee0a264e3",
    "authorName": "Testing 10",
    "name": "Hi Miccccc",
    "releaseDate": 1546300800
}
```
\
**Delete Book**\
[POST] /book/:bookUuid/delete
```$xslt
Path Parameters
bookUuid - uuid of a book
```