object @squad
attributes :id, :name, :abbrev, :wins, :losses, :ties
node(:record) do |squad|
  squad.record
end
