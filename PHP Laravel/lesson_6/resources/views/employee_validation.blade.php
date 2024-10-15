<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .invalid {
            color: red;
        }
    </style>
</head>
<body>
<form action="{{route('post_validate')}}" method="post">
    @csrf
    <label @error('name') class="invalid" @enderror for="name">Name </label>
    <input type="text" name="name" id="name" required>
    @error('name') <b style="color: red">{{$message}}</b> @enderror
    <br>
    <label @error('password') class="invalid" @enderror for="password">Password </label>
    <input type="password" name="password" id="password" required>
    @error('password') <b style="color: red">{{$message}}</b> @enderror
    <br>
    <label @error('confirm') class="invalid" @enderror for="confirm">Confirm </label>
    <input type="password" name="confirm" id="confirm" required>
    @error('confirm') <b style="color: red">{{$message}}</b> @enderror
    <br>
    <input type="submit" value="send">
</form>
@foreach($errors->all() as $error)
    {{$error}} <br>
@endforeach
</body>
</html>
