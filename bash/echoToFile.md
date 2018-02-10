# Use `cat` to write to file from terminal

1. In terminal run `cat <<EOF > index.html` where index.html is the name of the file you are creating.

2. Paste in the code you want to write. Example:

```html
<!DOCTYPE HTML>
<html lang="en">

  <head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<title>FakeJSON star lineup</title>

	<link href="https://fonts.googleapis.com/css?family=Roboto:500" rel="stylesheet">
	<link href="style.css" rel="stylesheet">

  </head>

  <body>

	<div id="root"></div>

	<script src="scripts.js"></script>
  </body>

</html>
```

3. Run `EOF` to end.

All Together:

```sh
PrisBook:fakejson-demo$ cat <<EOF > index.html
>
> <!DOCTYPE HTML>
> <html lang="en">
>
>   <head>
> <meta charset="utf-8">
> <meta name="viewport" content="width=device-width, initial-scale=1.0">
>
> <title>FakeJSON star lineup</title>
>
> <link href="https://fonts.googleapis.com/css?family=Roboto:500" rel="stylesheet">
> <link href="style.css" rel="stylesheet">
>
>   </head>
>
>   <body>
>
> <div id="root"></div>
>
> <script src="scripts.js"></script>
>   </body>
>
> </html>
> EOF
```
