object @squad
attributes :id, :name, :short, :abbrev, :squad_type, :wins, :losses, :ties
node(:record) do |squad|
  squad.record
end
