---
title: Improving web development process with virtual machines and Vagrant
description: Use Vagrant and virtual machines to save time and improve your web development process.
tags: [development, tutorial]
createdAt: 2020-07-26
updatedAt: 2020-07-26
---

An _environment_ is a computer system where an application runs. We develop the web applications in our machines, called the _development environment_, and are commonly deployed to a publicly accessible server machine, called the _production environment_.

Typically, applications will not behave similarly in both environments because they will likely have different hardware, software, and configurations. For example, let's say we have the following _production_ server setup:

| Name          | Type                         | Version |
|---------------|------------------------------|---------|
| Ubuntu        | Operating System             | 20.04   |
| MariaDB       | Database                     | 10.1    |
| PHP (php-fpm) | Runtime environment (webapp) | 7.2     |
| Node.js       | Runtime environment (tools)  | 12      |
| Nginx         | Web Server                   | 1.18    |

A web app designed to work with the above setup will work OK on another machine with an exact or nearly identical configuration. However, if it has a different version of any of the required services, libraries, or even OS, you'll probably encounter some issues.

You can directly set up your computer to mirror the production server, which is usual for starters. But what if several colleagues want to join in the development? What if your hard drive suddenly got corrupted or a ~~Windows~~ system update fucked up your setup?

Re-configuring your machine now and then is impractical, especially when developing multiple projects with different frameworks, databases, and languages.

This is where _virtual machines_ come in handy.

### Overview

A virtual machine (VM) is an image of an actual computer. With the help of _virtualization_, a physical computer (_host_) can emulate one or more computer systems (_guest_) that have different operating systems and hardware platforms. A software or hardware monitor (_hypervisor_) creates and controls these VMs, which uses native execution to share and manage resources while maintaining isolation of multiple environments.

Because virtual machines are isolated, you can safely do anything in the guest machine without affecting the host machine, such as running complex and OS-dependent applications, trying out new operating systems, software, network configurations, untrusted applications, etc.

### Hypervisors

A _hypervisor_ helps you create, manage, and monitor virtual machines. Here are some known hosted hypervisors that you can use:

* [VirtualBox](https://www.virtualbox.org/) - a free and open-source hypervisor by Oracle.
* [VMWare Workstation](https://www.vmware.com/) - a proprietary hypervisor by VMWare.
* [Hyper-V](https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v) - included in certain versions of Windows operating systems.

### System Requirements

Since a VM is an actual computer, the host machine should have relatively capable hardware, with its CPU and OS also supporting hardware virtualization for optimal performance. Generally, you need:

* **Reasonably powerful CPU**. Any recent Intel or AMD processor should suffice.
* **Memory** that's enough to support the minimum requirements of the host operating system, plus a minimum of 512MB for the guest operating system.
* A **free hard disk space** of at least 10GB, depending on the operating system and software that you need to install on the guest, as well as the number of projects you need to support. Dynamically-sized disk image files tend to grow considerably large.

### For software development

Application developers can make use of virtual machines to run, test, and even compile their projects. Hypervisors allow control of the allocation of most resources to a virtual machine, giving developers the freedom to create an environment that closely matches the specifications of the production machine.

With an environment that is similar to the production environment, bugs can be discovered and replicated much faster, thus improving workflow and quality assurance.

Moreover, hypervisors allow exporting and importing of virtual machines and their data as a _disk image_, making it possible to share and run an environment that behaves consistently across different development units.

Setting up a virtual machine (called _provisioning_), however, requires some technical knowledge, such as service and network configuration, and package management, to name a few. Not all project members will have the ability to provision a VM or have the time to do or learn it. And since VM disk images usually consume gigabytes of storage, one will need a high bandwidth network to transfer it within a short period.

Luckily, there's a tool called _Vagrant_ that helps make VM environment management easier.

### Vagrant up!

[Vagrant](https://www.vagrantup.com/intro) is a free, open-source, and cross-platform tool for creating and maintaining portable virtual environments for software development. Its authors claim it is the easiest and fastest way to create a virtual environment.

It works with _providers_ such as VirtualBox, VMWare, Docker, and AWS. Industry-standard _provisioning_ tools like shell scripts, Chef, and Puppet can automate the installation and configuration of software on the virtual machine.

VirtualBox is the [default provider](https://www.vagrantup.com/docs/providers/default) because it is free, most accessible, and provides the lowest friction for users to get started with Vagrant.

### Getting Started

For brevity, this guide will use Vagrant with VirtualBox. Download and install the following:

* [Latest version of Vagrant](https://www.vagrantup.com/docs/installation/)
* [Latest version of VirtualBox](https://www.virtualbox.org/)

You can verify the installation by running `vboxmanage` and `vagrant` commands in a new console session:

```bash
$ vboxmanage -v
5.2.34r133893

$ vagrant -v
Vagrant 2.2.6
```

### Vagrantfile

`Vagrantfile` (actual filename) is the specific file loaded by Vagrant that describes the type of the machine required by a project, and how to configure and provision these machines. It must be at the root directory of the project.

The configurations are defined using [Ruby](https://www.ruby-lang.org/), but the knowledge of the programming language is not required because it is mostly simple variable assignments.

To initialize a new Vagrant environment, run `vagrant init` on a terminal:

```bash
$ mkdir my-project
$ cd my-project
$ vagrant init
```

You can also run the `vagrant init` in the directory root of an existing project.

Below is a basic Vagrantfile:

```ruby
Vagrant.configure("2") do |config|
  config.vm.box = "base"
end
```

The Vagrantfile _should be committed to version control_ with your project files if you use one. That way, collaborators can benefit from Vagrant with less effort.

### Boxes

Instead of creating a virtual machine from scratch, Vagrant uses base images, called boxes, that you can quickly clone to create a virtual machine. It is always the first step to specify the box to use in the Vagrantfile.

You can always browse HashiCorp's [online catalog](https://app.vagrantup.com/boxes/search) for the box suitable for your project.

A box may take around hundreds to thousands of MBs of disk space. Free up some hard disk space and make to have a good internet connection when pulling a new box.

Boxes are stored globally for the current user. These are never modified because projects clones a box then uses the copy. So when you have two projects using the `ubuntu/bionic64` box, files added in one machine won't affect the other.

To pull a box from the catalog, run `vagrant box add <box name>`. Box names have a `<username>/<boxname>` format. These are downloaded once and re-used by multiple Vagrant environments.

```bash
$ vagrant box add ubuntu/bionic64
```

If the box for a Vagrant environment is not yet available locally, Vagrant pulls it automatically after running `vagrant up`.

### Using a Box

To use a box in a project, specify it in the Vagrantfile. For example, if we want to use Ubuntu 18.04:

```ruby
Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/bionic64"
end
```

You can also specify the version if you need a previous one:

```ruby
Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/bionic64"
  config.vm.box_version = "20200629.0.0"
end
```

### Running the virtual machine and SSH access

From a terminal, run the following command at the root directory to start the vagrant environment:

```bash
$ vagrant up
```

The terminal will print the status while the machine is booting up. Once done, the virtual machine will run in the background without any UI (aka _headless_ mode).

One way to interact with the virtual machine is through a [Secure Shell](https://en.wikipedia.org/wiki/Secure_Shell) (SSH) session, which you can do by running:

```bash
$ vagrant ssh
```

To end the SSH session, press `CTRL + D` or run `exit` or `logout`:

```bash
vagrant@bionic64:~$ exit
logout
Connection to 127.0.0.1 closed.
```

Remember that a running virtual machine consumes resources of the host machine. After you're done using it or don't need it for a while, run `vagrant halt` to shut it down.

If you won't use the virtual machine anymore, it's best to run `vagrant destroy` on the host machine to free up the consumed disk space.

### Synced Folders

Vagrant allows linking of your project directory to the virtual machine, called _synced folders_. It gives the tools or applications inside the virtual machine access to your project files while you edit them in the host at the same time. These are set up automatically during `vagrant up` and `vagrant reload`.

Modifying the files in the synced folder from either side (guest or host) will write, read, or delete the same data. So, if you remove a file from inside the virtual machine, it will also disappear from the host machine.

By default, Vagrant shares the project directory to the `/vagrant` directory in the guest machine.

To change the shared directory and mount point in the virtual machine, add the following to your `Vagrantfile`:

```ruby
Vagrant.configure("2") do |config|
  # other config
  config.vm.synced_folder "project/dir", "/path/in/vm"
end
```

If the first parameter is a relative path, it is relative to the project root. The second parameter must be an _absolute_ path of the project within the guest machine. Before mounting, it creates the folder in the VM if it doesn't exist.

You can also disable synced folders by setting the `disabled` option:

```ruby
Vagrant.configure("2") do |config|
  # other config
  config.vm.synced_folder "project/dir", "/path/in/vm", disabled: true
end
```

### Synced folder disk performance

The disk I/O of the default synced folders in VirtualBox is slow compared to the host machine, which is negligible with general use. However, if disk writes frequently occur within the shared folder, you'll see a significant impact.

How slow? It will take a simple page of a [Symfony](https://symfony.com/) web app in debug mode _more than 1s_ to load in the default sync type and _about 300ms_ in NFS, while only _about 80ms_ when served locally in the host. The framework uses caching, so it frequently writes data in its local `var/cache` directory.

Activities like package installation, compiling, and caching that do extensive writes on the disk are affected by this bottleneck.

Optimize by either disabling syncing of directories where heavy write occurs (e.g., node_modules, vendor, log, cache) or use an alternative type of syncing like [NFS](https://www.vagrantup.com/docs/synced-folders/nfs) (macOS/Linux) or [SMB](https://www.vagrantup.com/docs/synced-folders/smb) (Windows/macOS).

### Provisioning

Vagrant has built-in support for _automated provisioning_, enabling the creation of ready-to-use virtual machines easy and repeatable.

This is useful for creating environments like application servers that require setting up and running multiple services such as web servers, proxy servers, DBMS, etc. so other people that will use it won't need to go through the hassle of setting them up.

Now, let's try setting up an Apache webserver. Create a subdirectory `html` in the project root, then add an HTML file named `index.html`:

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Hello world, from Vagrant!</h1>
  </body>
</html>
```

Then make a simple provisioning shell script named `bootstrap.sh` and save it in the same directory as your Vagrantfile:

```bash
#!/user/bin/env
apt-get update
apt-get install -y apache2
if ! [ -L /var/www ]; then
  rm -rf /var/www
  ln -fs /vagrant /var/www
fi
```

A [shell script](https://en.wikipedia.org/wiki/Shell_script) contains a sequence of commands that you usually run in a terminal prompt. The above script is a set of Linux commands that installs an Apache web server and symlinks `/vagrant` to `/var/www`, the base directory for webserver files.

Next, we update the Vagrantfile to use this script for provisioning:

```ruby
Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/bionic64"
  config.vm.provision :shell, path: "bootstrap.sh"
end
```

The `provision` setting tells Vagrant to use the `shell` provisioner to setup the machine with the `bootstrap.sh` file. The file path is relative to the project root.

After that, run `vagrant up` to boot your machine and Vagrant will automatically provision it. If the machine is already running, run `vagrant reload --provision` to reboot and run the provisioner.

If the machine is created but stopped, run `vagrant up --provision` instead to boot and provision it since Vagrant does the provisioning only on the first `vagrant up`.

### Networking

Networking configurations in Vagrant allows your virtual machines to communicate with other virtual machines (given they have the same provider) or with the host machine.

There are three ways to achieve this:

* [Port Forwarding](https://www.vagrantup.com/docs/networking/forwarded_ports)
* [Private Network](https://www.vagrantup.com/docs/networking/private_network)
* [Public Network](https://www.vagrantup.com/docs/networking/public_network)

The items above links to the Vagrant docs for the complete details. For this guide, let's try _port forwarding_.

Port forwarding allows you to access a specific port on the guest machine via a port on the host machine. So when you access that port on the host machine, all network traffic is forwarded to the specified port on the guest machine.

To access the webserver (port 80) on the guest machine from the host machine, we can forward all network traffic from port 8080:

```ruby
Vagrant.configure("2") do |config|
  # other config...
  config.vm.network :forwarded_port, guest: 80, host: 8080
end
```

Run `vagrant reload` or `vagrant up` to load the changes. Once the machine has loaded, open [http://localhost:8080](http://localhost:8080/) in your browser to see the webpage hosted from the virtual machine.

### Conclusion

Explore more on what you can do with Vagrant by reading the [online documentation](https://www.vagrantup.com/docs). For provisioning, you need to have a working knowledge of manipulating and configuring the platform of your choice.

It may feel unnecessary or intimidating at first, but learning to use Vagrant is worth it in the long run because it is efficient and saves a lot of everyone's time and effort.
