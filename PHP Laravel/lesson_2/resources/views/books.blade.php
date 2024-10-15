<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <title>books</title>
</head>
<body>
<div class="card">
    <div class="card-body">
        <table>
            @foreach($books as $key => $book)
                <tr>
                    <td>{{$book}}</td>
                    <td><a href="{{route('remove_book', $key)}}">Delete Book</a></td>
                </tr>
            @endforeach
        </table>
        <form action="{{route('add_book')}}" name="add-book-post-form" id="add-book-post-form" method="post">
            @csrf
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" class="form-control" required>
            </div>
            <button class="btn" type="submit">Submit</button>
        </form>
    </div>
</div>
</body>
</html>
