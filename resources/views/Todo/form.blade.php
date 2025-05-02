<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    @include("Todo.list")
    <form method="post" action="/todo/store" enctype="multipart/form-data"> 
    @csrf
        <div class="input">
            <table>
                <tr>
                    <td>Task: </td>
                    <td><input type="text" name="task"></td>
                </tr>
                <tr>
                    <td>Image: </td>
                    <td><input type="file" name="image"></td>
                </tr>
                <tr>
                    <td>Description: </td>
                    <td><textarea name="description" id="" cols="30" rows="4"></textarea></td>
                </tr>
            </table>
        </div>

        <div class="button">
            <button type="submit">Save</button>
            <a href="/todo">
                <button type="button">Cancel</button>
            </a>
        </div>
        

    </form>
    <style>
        form{
            width:400px;
            height: 350px;
            border: solid 2px grey;
            border-radius: 20px;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
        }
        .button{
            display: flex;
            justify-content: end;
        }
    </style>
</body>
</html>
<!--hello-->