<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<form action="{{route('post_form')}}" method="post">
    @csrf
    <label for="name">Name: </label>
    <input type="text" name="name" id="name">
    <br>
    <br>
    <label for="password">Password: </label>
    <input type="password" name="password" id="password">
    <br>
    <br>
    <label for="age">Age: </label>
    <input type="number" name="age" id="age">
    <br>
    <br>
    <label for="male">Male</label>
    <input type="radio" name="gender" id="male" value="male">
    <label for="female">Female</label>
    <input type="radio" name="gender" id="female" value="female">
    <br>
    <br>
    <label for="books">Books</label>
    <input type="checkbox" name="category[]" id="books" value="books">
    <label for="computers">Computers</label>
    <input type="checkbox" name="category[]" id="computers" value="computers">
    <label for="cars">Cars</label>
    <input type="checkbox" name="category[]" id="cars" value="cars">
    <br>
    <br>

    <input type="submit" value="Send">
</form>
</body>
</html>
