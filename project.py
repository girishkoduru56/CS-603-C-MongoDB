import pymongo
from pymongo import MongoClient

class MongoDBCRUD:
    def __init__(self, db_name, collection_name, uri="mongodb+srv://venkatagirishkoduru:KN1mcVXQW7j71rYH@cluster0.qchduy6.mongodb.net/"):
        self.client = MongoClient(uri)
        self.db = self.client[db_name]
        self.collection = self.db[collection_name]

    def create(self, document):
        """Create a new document."""
        result = self.collection.insert_one(document)
        print(f"Document inserted with id: {result.inserted_id}")

    def read(self, filter):
        """Read documents that match the filter."""
        documents = self.collection.find(filter)
        for doc in documents:
            print(doc)

    def update(self, filter, update):
        """Update documents that match the filter."""
        result = self.collection.update_many(filter, {"$set": update})
        print(f"Documents matched: {result.matched_count}, Documents modified: {result.modified_count}")

    def delete(self, filter):
        """Delete documents that match the filter."""
        result = self.collection.delete_many(filter)
        print(f"Documents deleted: {result.deleted_count}")

    def display_all(self):
        """Display all documents in the collection."""
        documents = self.collection.find()
        for doc in documents:
            print(doc)

# Main program
if __name__ == "__main__":
    db_name = "mydatabase"
    collection_name = "mycollection"
    crud = MongoDBCRUD(db_name, collection_name)

    while True:
        print("\nCRUD Operations:")
        print("1. Create")
        print("2. Read")
        print("3. Update")
        print("4. Delete")
        print("5. Display All")
        print("6. Exit")
        choice = input("Enter your choice (1-6): ")

        if choice == '1':
            document = {}
            print("Enter document data (key=value). Type 'end' to finish.")
            while True:
                data = input()
                if data.lower() == 'end':
                    break
                key, value = data.split('=')
                document[key] = value
            crud.create(document)
        elif choice == '2':
            filter = {}
            print("Enter filter criteria (key=value). Type 'end' to finish.")
            while True:
                data = input()
                if data.lower() == 'end':
                    break
                key, value = data.split('=')
                filter[key] = value
            crud.read(filter)
        elif choice == '3':
            filter = {}
            print("Enter filter criteria (key=value). Type 'end' to finish.")
            while True:
                data = input()
                if data.lower() == 'end':
                    break
                key, value = data.split('=')
                filter[key] = value
            
            update = {}
            print("Enter update data (key=value). Type 'end' to finish.")
            while True:
                data = input()
                if data.lower() == 'end':
                    break
                key, value = data.split('=')
                update[key] = value
            
            crud.update(filter, update)
        elif choice == '4':
            filter = {}
            print("Enter filter criteria (key=value). Type 'end' to finish.")
            while True:
                data = input()
                if data.lower() == 'end':
                    break
                key, value = data.split('=')
                filter[key] = value
            crud.delete(filter)
        elif choice == '5':
            crud.display_all()
        elif choice == '6':
            print("Exiting the program.")
            break
        else:
            print("Invalid choice. Please enter a number between 1 and 6.")
