# Using Sypher
## How do i write a new post using Sypher?

Create a new post using Sypher is easy, just follow steps below.

###1- Create a folder to your post

In Sypher, all posts stay in `posts` folder, you can name the folder as you do want. Remember to don't remove `author.json` and `postlist.json` files from `posts` folder, they are very important to Sypher works.

###2- Add your post information to the post list

So, you did create a new post folder, now it's necessary to add your new post to the list of all posts in your blog. Unfortunately, this mechanism was the only way we found at the moment to list posts. Then, if would you create a folder and a new post but this post is not appearing in the main page, verify if you didn't forget to add it to the post list.

All posts should be listed by `postlist.json` file. It's a JSON format file, but you don't need to know how to write JSON files, just add a new line in this format:

`{ "title": "Your post title", "folder":"Name of your new post folder" }`

All file content should be between `[ ]`. If you have more than one post, each pair of `{ }` should have `,` between, but never at final.

Example of two posts:

`[{ "title": "Post one", "folder":"post01-Folder" },{ "title": "Post two", "folder":"post02-Folder" }]`

Example of three posts:

`[{ "title": "Post one", "folder":"post01-Folder" },{ "title": "Post two", "folder":"post02-Folder" },{ "title": "Post three", "folder":"post03-Folder" }]`

Once you did, save the file and go to next step.

###3- Writing my post

Now, if you did right all steps above, now it's time to write your post. Inside your post folder, you should create a markdown file with this name(this name is obligatory): `post.md`

This guide will not teach you all about Markdown, but only basics to use Sypher.

Then the first thing you will do is give a title to your new post, type a `#` at first line just once for each post.

Example: `# My Title`

To add a subtitle to your post, type a `##` at first line just once for each post.

Example: `## My subtitle`

To add a paragraph, just start to write in a new line, without anything before.

###Using a sequence of #, your add a paragraph title

Example: `### Title of Paragraph`

And now, to add a new paragraph, just start to type in a new line. These 3 things is all necessary to start to write a new post, if you have some doubt about, see `welcomePost` folder in `posts` folder.

###Emphasis and Bold text

To write a word or phrase with emphasis just put the text between `* *`, to write as bold `** **`

*This is a emphasis*

**This is a bold**

###Inserting a list in your post

To insert a unordered list in your post:

`+	Element 1`

`+	Element 2`

`+	Element 3`

Don't forget to give a TAB instead a normal space between + symbol and first letter of your element name,the format above will appear like:

+   Element 1
+   Element 2
+   Element 3

To write a ordered list , just do the same writing numbers in order instead using `+` symbol

`1.	Element 1`

`2.	Element 2`

`3.	Element 3`

You will have that:

1.   Element 1
2.   Element 2
3.   Element 3

### Inserting a image

It's recommended to create a folder named `images` inside your post folder to put all images that will appear in your respective post. To add a image in your post, write in your markdown file in a new line with this format:

`![Text about Image](link_of_your_image "Image's Title")`

**IMPORTANT!** link of your image should be `posts/name_of_your_post_folder/images/name_of_image.png` to appear correctly, if not, the image will not appear.

In this example we have a `welcomePost` folder and a image `logo.png`. Then you should write in your markdown file:

`![Text about Image](posts/welcomePost/images/logo.png "Image's Title")`

Then, image will appear.

![Text about Image](posts/welcomePost/images/logo.png "Image's Title")

###4- Done

If you did all until here, now it's time to upload your blog files to the server. If you using GitHub pages, you should just push it to your GitHub Pages repo, you can use a terminal(for advanced users) or use Github Desktop that is a easy to use interface to unexperienced users with git that you don't need to write any command-line.

If you are using a normal hosting service, just upload the files to your server and it will be ready. 

After these steps, your blog will be working and ready to post.
