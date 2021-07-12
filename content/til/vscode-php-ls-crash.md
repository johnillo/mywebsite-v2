---
title: "Resolve VS Code \"The PHP Language Server crashed 5 times in the last 3 minutes\" notification"
description: Troubleshooting the PHP Language Server crashing after opening a PHP project in VS Code.
createdAt: 2021-07-13
updatedAt: 2021-07-13
---

My VS Code keep showing a notification that _the PHP Language Server has crashed several times in the last 3 minutes after loading a PHP project_.

PHP Version on my system:

```sh
PHP 8.0.7 (cli) (built: Jun  2 2021 04:04:16) ( NTS )
Copyright (c) The PHP Group
Zend Engine v4.0.7, Copyright (c) Zend Technologies
```

A [solution](https://stackoverflow.com/questions/66425510/the-php-language-server-server-crashed-5-times-in-the-last-3-minutes-the-server) is to update the packages the plugin uses to a newer version using Composer:

```sh
cd ~/.vscode/extensions/felixfbecker.php-intellisense-2.3.14/
composer update
```

The trick is also mentioned in an [issue](https://github.com/felixfbecker/php-language-server/issues/779) on the plugin's GitHub repository.