# Robo Factory
Robo Factory is a web application that helps with Quality Control and shipping of Robots.

The application is built on Rails with React running in the front-end. 

## Assumptions
It is assumed that during the first QA stage when we extinguish robots that we do not recycle them,
but that they also do not make it to the next stages or shipping. 

It is assumed that when dealing with batches it's OK for this version of the application to only deal with the most recent batch.

It is assumed that by 'recycle' we mean deleting completely from the system.

## Usage
Note:
_This project assumes the use of Ruby Version Manager (rvm) for managing ruby and gem dependencies (see [https://rvm.io/](https://rvm.io/) for installation details). RoboFactory was built and tested with Ruby 2.4.2_
 
* Ensure bundler is installed `gem install bundler -v 1.16.0.pre.3`
* Install gem dependencies `bundle install`
* Create the database `rails db:create`
* Migrate the database `rails db:migrate`
* Seed the database `rails db:seed`
* Run with `rails server`
* Create a new robot batch with `rake batch:create`

## Tests
Unfortunately due to time constraints I haven't implemented client side tests. 
On the backend there are a few controller tests, but I've also limited the amount of testing 
that I've done in order to get the coding challenge back in a reasonable timeframe.

To run tests:

* Run `rspec`

## Limitations
Due to time constraints and complexity of implementing this properly, 
I've ignored a proper implementation dealing with CSRF tokens for POSTing from React.
https://github.com/github/fetch/issues/424