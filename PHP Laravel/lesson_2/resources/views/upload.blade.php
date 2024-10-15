<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <title>Upload</title>
</head>
<body>
<form action="{{route('upload_file')}}" name="add-file-post-form" id="add-file-post-form"
      method="post" enctype="multipart/form-data">
    @csrf
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" class="form-control" required>
        <input type="file" name="uploaded" id="uploaded">
    </div>
    <button class="btn" type="submit">Submit</button>
</form>
</body>
</html>
