import Todo from './todo.model';

export async function getAll(req, res, next) {
  try {
    const todos = await Todo.find({});

    res.status(200).json({ data: todos });
  } catch (error) {
    next(error);
  }
}

export async function getOne(req, res, next) {
  try {
    const id = req.params.id;

    const todo = await Todo.findById(id);

    res.status(200).json({ data: todo });
  } catch (error) {
    next(error);
  }
}

export async function createOne(req, res, next) {
  try {
    const { content } = req.body;
    const todo = await Todo.create({ content });

    res.status(201).json({ data: todo });
  } catch (error) {
    next(error);
  }
}

export async function deleteOne(req, res, next) {
  try {
    const { id } = req.params;

    const todo = await Todo.findByIdAndDelete(id);

    res.status(200).json({ data: todo });
  } catch (error) {
    next(error);
  }
}

export async function updateOne(req, res, next) {
  try {
    const { id } = req.params;

    const todo = await Todo.findById(id);
    const todo1 = await Todo.findByIdAndUpdate(id, { status: true });

    res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
}
