module.exports = {
  create: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.create_user()
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  },

  getOne: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.readWorkoutWeights()
      .then( user => res.status(200).send( user ) )
      .catch( () => res.status(500).send() );

    dbInstance.readWorkoutCardio()
      .then( user => res.status(200).send(user))
      .catch( () => res.status(500).send());  
  },

  getAll: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_products()
      .then( products => res.status(200).send( products ) )
      .catch( () => res.status(500).send() );
  },

  update: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.update_weights()
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );

    dbInstance.update_cardio()
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  },

  delete: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.delete_product()
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  }
};