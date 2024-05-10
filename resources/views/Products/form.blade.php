<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="frame">
        <h2>Product Form</h2>
        <form action="/product/store" method="post">
        @csrf

        <div class="container">
        Name: <input type="text" name="name"><br>
        <div class="price">
            Price <input type="number" name="pricing">
            Promotion <input type="text" name="promotion">
        </div>
        Category <input type="number" name="category_id">
        </input>
        <br>
        Image <input type="file" name="image"><span>Choose files to upload</span><br>
        Description <textarea name="desciption" id="" ></textarea>
        </div>
        </form>
        <div class="button">
            <button type="submit">Save</button>
            <a href="/product/add">
                <button type="button">Cancel</button>
            </a>
        </div>
    </div>
</body>
</html>

<style>
    .frame{
        border: solid 2px black;
        width: 100%;
        height: 100%;
        margin: 20px 20px;
        padding: 20px 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        /* align-items: center; */
    }
    input{
        width: 90%;
    }
    .container{
        width: 100%;
    }
    .price{
        width: 100%;
        display:flex;
        justify-content:space-around;

    }
</style>