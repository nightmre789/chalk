# Chalk

Chalk Academic environment

Build Django:

```
cd backend
pip install virtualenv
virtualenv env
**Windows:** source env/Scripts/activate
**Mac:** source env/bin/activate
pip install -r ./requirements.txt
python manage.py migrate
```

Import sample data:

```
python manage.py import
```

Build React:

```
cd frontend
npm install
npm start
```